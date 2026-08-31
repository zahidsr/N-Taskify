using NTaskify.Domain.Common;
using NTaskify.Domain.Enums;

namespace NTaskify.Domain.Entities;

public class TaskCompletion : BaseEntity
{
    public Guid UserId { get; set; }

    public Guid TaskDefinitionId { get; set; }

    public TaskCompletionStatus Status { get; set; }
        = TaskCompletionStatus.Pending;

    public DateTimeOffset SubmittedAt { get; set; }
        = DateTimeOffset.UtcNow;

    public DateTimeOffset? VerifiedAt { get; set; }
}