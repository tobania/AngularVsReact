using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Serilog;
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
        {
            Log.Information("[TodoRepository::All] >> Reading all..");
            return (await TodoCollection.FindAsync(_ => true)).ToEnumerable();
        }


        public async Task<Todo> ById(Guid id)
        {
            Log.Information("[TodoRepository::ById] >> Reading by id..");
            return (await TodoCollection.FindAsync(t => t.Identifier == id)).FirstOrDefault();
        }
        public async Task<Todo> Delete(Todo todo)
        {
            if (todo == null) throw new ArgumentNullException(nameof(todo));
            Log.Information($"[TodoRepository::Delete] >> Deleting {todo.Identifier}..");
            await TodoCollection.FindOneAndDeleteAsync(t => t.Identifier == todo.Identifier);
            return todo;
        }

        public async Task<Todo> Save(Todo todo)
        {
            if (todo.__IsNew)
            {
                Log.Information($"[TodoRepository::Delete] >> Inserting {todo.Title}..");
                await TodoCollection.InsertOneAsync(todo);
            }
            else
            {
                Log.Information($"[TodoRepository::Save] >> Updating {todo.Identifier}..");
                await TodoCollection.ReplaceOneAsync(t => t.Identifier == todo.Identifier, todo);
            }

            return todo;
        }
    }
}