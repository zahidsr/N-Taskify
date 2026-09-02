using NTaskify.Application.Abstractions;
using NTaskify.Application.Dtos;
using NTaskify.Application.Exceptions;
using NTaskify.Domain.Entities;
using NTaskify.Domain.Enums;

namespace NTaskify.Application.Services;

public class TaskService : ITaskService
{
    private readonly ITaskCatalogService _taskCatalogService;
    private readonly ITaskCompletionRepository _taskCompletionRepository;
    private readonly IPointTransactionRepository _pointTransactionRepository;

    public TaskService(
        ITaskCatalogService taskCatalogService,
        ITaskCompletionRepository taskCompletionRepository,
        IPointTransactionRepository pointTransactionRepository)
    {
        _taskCatalogService = taskCatalogService;
        _taskCompletionRepository = taskCompletionRepository;
        _pointTransactionRepository = pointTransactionRepository;
    }

    public async Task<CompleteTaskResponse> CompleteTaskAsync(Guid userId, Guid taskDefinitionId)
    {
        var task = _taskCatalogService.FindById(taskDefinitionId)
            ?? throw new TaskFlowException("Görev bulunamadı.");

        if (await _taskCompletionRepository.FindVerifiedAsync(userId, taskDefinitionId) is not null)
            throw new TaskFlowException("Bu görev zaten tamamlandı.");

        var completion = new TaskCompletion
        {
            UserId = userId,
            TaskDefinitionId = taskDefinitionId,
            Status = TaskCompletionStatus.Verified,
            VerifiedAt = DateTimeOffset.UtcNow
        };
        await _taskCompletionRepository.AddAsync(completion);

        var transaction = new PointTransaction
        {
            UserId = userId,
            Amount = task.RewardPoints,
            Type = PointTransactionType.TaskReward,
            Description = $"Görev tamamlandı: {task.Title}"
        };
        await _pointTransactionRepository.AddAsync(transaction);

        var newBalance = await _pointTransactionRepository.GetBalanceAsync(userId);

        return new CompleteTaskResponse(
            Success: true,
            PointsAwarded: task.RewardPoints,
            NewBalance: newBalance,
            Message: $"Doğrulama başarılı! +{task.RewardPoints} N-Puan kazandın.");
    }
}
