using NTaskify.Domain.Common;
using NTaskify.Domain.Enums;

namespace NTaskify.Domain.Entities;

public class TaskDefinition : BaseEntity
{
    public Guid CampaignId { get; set; }

    public required string Title { get; set; }

    public string? Description { get; set; }

    public TaskType Type { get; set; }

    public VerificationMethod VerificationMethods { get; set; }

    public int RewardPoints { get; set; }

    public bool IsActive { get; set; } = true;
}