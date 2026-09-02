using NTaskify.Application.Dtos;

namespace NTaskify.Application.Services;

public interface ITaskService
{
    Task<CompleteTaskResponse> CompleteTaskAsync(Guid userId, Guid taskDefinitionId);
}
