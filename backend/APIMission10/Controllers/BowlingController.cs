using APIMission10.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIMission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;
        public BowlingController(IBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        public IEnumerable<Bowler> Get()
        {
            var bowlingData = _bowlingRepository.Bowlers.ToArray();

            return bowlingData;
        }


    }
}
