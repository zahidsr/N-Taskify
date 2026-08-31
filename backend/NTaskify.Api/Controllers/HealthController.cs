using Microsoft.AspNetCore.Mvc;

namespace NTaskify.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            service = "N-Taskify API",
            status = "Healthy",
            timestamp = DateTime.UtcNow
        });
    }
}   