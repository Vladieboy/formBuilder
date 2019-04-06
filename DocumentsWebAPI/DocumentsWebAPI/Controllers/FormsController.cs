using DocumentsWebAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using static DocumentsWebAPI.Models.Forms.FormBindingModels;
using static DocumentsWebAPI.Models.Forms.FormViewModels;

namespace DocumentsWebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Forms")]
    public class FormsController : ApiController
    {
        FormServices formServices;
        public FormsController()
        {
            formServices = new FormServices();
        }

        [Route("create/vacation"), HttpPost]
        public IHttpActionResult AddVacationRequest(VacationForm model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int rowsAffected = formServices.AddVacationRequest(model);
            if(rowsAffected == 0)
            {
                return BadRequest("Unable to create request");
            }
            return Ok();
        }

        [Route(""), HttpGet]
        public IHttpActionResult GetPendingEmployeeRequests(MyDocuments model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var documents = new PendingDocuments();
            documents = formServices.getPendingDocuments(model);
            return Ok(documents);

            
        }
    }
}
