using NTaskify.Application.Dtos;

namespace NTaskify.Application.Services;

public interface ITaskCatalogService
{
    IReadOnlyList<TaskDto> GetAll(IReadOnlySet<Guid>? completedTaskIds = null);

    TaskDto? FindById(Guid taskId);
}
