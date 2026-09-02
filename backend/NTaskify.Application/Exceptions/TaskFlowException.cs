namespace NTaskify.Application.Exceptions;

public class TaskFlowException : Exception
{
    public TaskFlowException(string message) : base(message)
    {
    }
}
