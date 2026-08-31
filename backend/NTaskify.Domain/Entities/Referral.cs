using NTaskify.Domain.Common;

namespace NTaskify.Domain.Entities;

public class Referral : BaseEntity
{
    public Guid ReferrerUserId { get; set; }

    public Guid ReferredUserId { get; set; }

    public bool RewardGranted { get; set; }
}