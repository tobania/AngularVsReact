using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Tobania.AngularVsReact.Models;
using Tobania.AngularVsReact.Repositories.Contracts;

namespace Tobania.AngularVsReact.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        public Task<IEnumerable<Todo>> All()
        {
            throw new NotImplementedException();
        }

        public Task<Todo> ById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<Todo> Delete(Todo todo)
        {
            throw new NotImplementedException();
        }

        public Task<Todo> Save(Todo todo)
        {
            throw new NotImplementedException();
        }
    }
}