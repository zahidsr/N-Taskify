namespace NTaskify.Application.Dtos;

public class TaskDto
{
    public required string Id { get; set; }

    public required string Title { get; set; }

    public string? Description { get; set; }

    public required string Category { get; set; }

    public required string Type { get; set; }

    public int RewardPoints { get; set; }

    public required string VerificationMethod { get; set; }

    public required string Status { get; set; }
}
