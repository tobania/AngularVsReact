using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Tobania.AngularVsReact.Common;
using Tobania.AngularVsReact.Models;
using Tobania.AngularVsReact.Repositories.Contracts;

namespace Tobania.AngularVsReact.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly MongoDBConfig _mongoDbConfig;
        private readonly IMongoDatabase _db;

        protected IMongoCollection<Todo> TodoCollection => _db.GetCollection<Todo>("todos");

        public TodoRepository(IOptions<MongoDBConfig> options)
        {
            _mongoDbConfig = options.Value;
            var client = new MongoClient(_mongoDbConfig.ConnectionString);
            _db = client.GetDatabase("AngularVsReact");

            if (TodoCollection == null)
            {
                _db.CreateCollection("todos");
            }
        }

        public async Task<IEnumerable<Todo>> All()
            => (await TodoCollection.FindAsync(_ => true)).ToEnumerable();


        public async Task<Todo> ById(Guid id)
            => (await TodoCollection.FindAsync(t => t.Id == id)).FirstOrDefault();
        public async Task<Todo> Delete(Todo todo)
        {
            if (todo == null) throw new ArgumentNullException(nameof(todo));
            await TodoCollection.FindOneAndDeleteAsync(t => t.Id == todo.Id);
            return todo;
        }

        public async Task<Todo> Save(Todo todo)
        {
            if (todo.InternalId == null)
                await TodoCollection.InsertOneAsync(todo);
            else
                await TodoCollection.ReplaceOneAsync(t => t.Id == todo.Id, todo);

            return todo;
        }
    }
}