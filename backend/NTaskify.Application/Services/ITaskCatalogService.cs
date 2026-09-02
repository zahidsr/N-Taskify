using NTaskify.Application.Dtos;

namespace NTaskify.Application.Services;

public interface ITaskCatalogService
{
    IReadOnlyList<TaskDto> GetAll();
}
