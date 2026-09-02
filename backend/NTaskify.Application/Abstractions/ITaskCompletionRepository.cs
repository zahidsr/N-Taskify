using NTaskify.Domain.Entities;

namespace NTaskify.Application.Abstractions;

public interface ITaskCompletionRepository
{
    Task<TaskCompletion?> FindVerifiedAsync(Guid userId, Guid taskDefinitionId);

    Task<HashSet<Guid>> GetVerifiedTaskIdsAsync(Guid userId);

    Task AddAsync(TaskCompletion completion);
}
