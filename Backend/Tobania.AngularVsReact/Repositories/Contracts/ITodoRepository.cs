
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Tobania.AngularVsReact.Models;

namespace Tobania.AngularVsReact.Repositories.Contracts
{
    public interface ITodoRepository
    {
        Task<IEnumerable<Todo>> All();

        Task<Todo> ById(Guid id);
        Task<Todo> Save(Todo todo);

        Task<Todo> Delete(Todo todo);

    }
}