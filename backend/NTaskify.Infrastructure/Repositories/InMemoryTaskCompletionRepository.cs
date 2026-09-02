using System.Collections.Concurrent;
using NTaskify.Application.Abstractions;
using NTaskify.Domain.Entities;
using NTaskify.Domain.Enums;

namespace NTaskify.Infrastructure.Repositories;

public class InMemoryTaskCompletionRepository : ITaskCompletionRepository
{
    private readonly ConcurrentBag<TaskCompletion> _completions = new();

    public Task<TaskCompletion?> FindVerifiedAsync(Guid userId, Guid taskDefinitionId)
    {
        var completion = _completions.FirstOrDefault(c =>
            c.UserId == userId
            && c.TaskDefinitionId == taskDefinitionId
            && c.Status == TaskCompletionStatus.Verified);
        return Task.FromResult(completion);
    }

    public Task<HashSet<Guid>> GetVerifiedTaskIdsAsync(Guid userId)
    {
        var ids = _completions
            .Where(c => c.UserId == userId && c.Status == TaskCompletionStatus.Verified)
            .Select(c => c.TaskDefinitionId)
            .ToHashSet();
        return Task.FromResult(ids);
    }

    public Task AddAsync(TaskCompletion completion)
    {
        _completions.Add(completion);
        return Task.CompletedTask;
    }
}
