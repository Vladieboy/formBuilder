using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using static DocumentsWebAPI.Models.Forms.FormBindingModels;
using static DocumentsWebAPI.Models.Forms.FormViewModels;

namespace DocumentsWebAPI.Services
{
    public class FormServices
    {
        public List<Document> SelectAll()
        {
            using (var conn = GetConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "dbo.Documents_Select_All";

                var documents = new List<Document>();

                using (var reader = cmd.ExecuteReader())
                {

                    // Check the domain model for all props sql metadata returned from selection
                    while (reader.Read())
                    {
                        var document = new Document();
                        document.FormId = (int)reader["Id"];
                        document.Name = (string)reader["Name"];
                        document.FormFields = (string)reader["FormFields"];
                        documents.Add(document);
                    }

                }

                return documents;
            }
        }

        public int Add(Form data)
        {
            using (var conn = GetConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "dbo.Documents_Insert";
                cmd.Parameters.AddWithValue("@Name", data.Name);
                cmd.Parameters.AddWithValue("@FormFields", data.FormFields);
                //cmd.Parameters.AddWithValue("@IsRequiredByEmployeeManager", data.IsRequiredByEmployeeManager);
                var approvers = new SqlParameter("@Approvers", SqlDbType.Structured);
                if (data.ApproverList.Any())
                {
                    approvers.Value = new Data.Structured.ApproverLineTable(data.ApproverList);
                };
                cmd.Parameters.Add(approvers);
                return cmd.ExecuteNonQuery();
            }
        }

        public int AddVacationRequest(Models.Forms.FormBindingModels.VacationForm data)
        {

                using (var conn = GetConnection())
                {
                    var cmd = conn.CreateCommand();
                    cmd.CommandText = "dbo.Form_Vacation_Insert";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EmployeeId", data.EmployeeId);
                    cmd.Parameters.AddWithValue("@DepartmentId", data.DepartmentId);
                    cmd.Parameters.AddWithValue("@DateStart", data.DateFrom);
                    cmd.Parameters.AddWithValue("@DateEnd", data.DateTo);
                    cmd.Parameters.AddWithValue("@Notes", data.Notes);
                    return cmd.ExecuteNonQuery();
                }
        }

        public PendingDocuments getPendingDocuments(MyDocuments data)
        {
            var myDocuments = new PendingDocuments();
            using (var conn = GetConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.Pending_Documents_Select_By_Employee_Id";
                cmd.Parameters.AddWithValue("@EmployeeId", data.EmployeeId);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        myDocuments.Id = (int)reader["Id"];
                        myDocuments.Type = (string)reader["Type"];
                        myDocuments.FormId = (int)reader["FormId"];
                        myDocuments.ApproverId = (int)reader["ApproverId"];
                        myDocuments.CreatorId = (int)reader["CreatorId"];
                        myDocuments.DateCreated = (DateTime)reader["DateCreated"];
                        myDocuments.DateModified = (DateTime)reader["DateModified"];
                    }
                    return myDocuments;
                }
            }
        }

        private SqlConnection GetConnection()
        {
            var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);
            conn.Open();
            return conn;
        }
        private SqlConnection GetJuliesConnection()
        {
            var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["JuliesConnection"].ConnectionString);
            conn.Open();
            return conn;
        }

    }
}