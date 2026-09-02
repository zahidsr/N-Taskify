namespace NTaskify.Application.Dtos;

public record CompleteTaskResponse(bool Success, int PointsAwarded, int NewBalance, string Message);
