using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DocumentsWebAPI.Models.Forms
{
    public class FormViewModels
    {
        public class Document
        {
            public int FormId { get; set; }
            public string Name { get; set; }
            public string FormFields { get; set; }
        }

        public class PendingDocuments
        {
            public int Id { get; set; }
            public string Type { get; set; }

            public int ApproverId { get; set; }
            public int CreatorId { get; set; }
            public int FormId { get; set; }
            public DateTime DateCreated { get; set; }
            public DateTime DateModified { get; set; }
        }
    }
}