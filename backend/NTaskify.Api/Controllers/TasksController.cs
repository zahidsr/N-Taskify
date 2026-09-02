using Microsoft.AspNetCore.Mvc;
using NTaskify.Application.Services;

namespace NTaskify.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly ITaskCatalogService _taskCatalogService;

    public TasksController(ITaskCatalogService taskCatalogService)
    {
        _taskCatalogService = taskCatalogService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_taskCatalogService.GetAll());
    }
}
