using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NTaskify.Application.Abstractions;
using NTaskify.Application.Exceptions;
using NTaskify.Application.Services;

namespace NTaskify.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class TasksController : ControllerBase
{
    private readonly ITaskCatalogService _taskCatalogService;
    private readonly ITaskCompletionRepository _taskCompletionRepository;
    private readonly ITaskService _taskService;

    public TasksController(
        ITaskCatalogService taskCatalogService,
        ITaskCompletionRepository taskCompletionRepository,
        ITaskService taskService)
    {
        _taskCatalogService = taskCatalogService;
        _taskCompletionRepository = taskCompletionRepository;
        _taskService = taskService;
    }

    private Guid CurrentUserId =>
        Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var completedIds = await _taskCompletionRepository.GetVerifiedTaskIdsAsync(CurrentUserId);
        return Ok(_taskCatalogService.GetAll(completedIds));
    }

    [HttpPost("{id:guid}/complete")]
    public async Task<IActionResult> Complete(Guid id)
    {
        try
        {
            var response = await _taskService.CompleteTaskAsync(CurrentUserId, id);
            return Ok(response);
        }
        catch (TaskFlowException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
}
