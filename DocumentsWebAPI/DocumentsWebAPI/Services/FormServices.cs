using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using static DocumentsWebAPI.Models.Forms.FormBindingModels;
using static DocumentsWebAPI.Models.Forms.FormViewModels;

namespace DocumentsWebAPI.Services
{
    public class FormServices
    {

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

    }
}