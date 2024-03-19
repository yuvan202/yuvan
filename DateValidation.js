$(document).ready(function () {
              $('#ctl00_MainContent_txtLabourToDate_txtDate').on('change', function () {
                  ValidatePreviousDate();
              });

              $("#ctl00_MainContent_txtLabourFromDate_txtDate").blur(function () {
                  var fromDateVal = $("#ctl00_MainContent_txtLabourFromDate_txtDate").val();
                  var toDateVal = $("#ctl00_MainContent_txtLabourToDate_txtDate").val();

                  if (fromDateVal !== "dd/mm/yyyy" && toDateVal !== "dd/mm/yyyy") {
                      var fromDate = parseDate(fromDateVal);
                      var toDate = parseDate(toDateVal);
                      if ($("#ctl00_MainContent_txtLabourFromDate_txtDate").val() != "" && $("#ctl00_MainContent_txtLabourFromDate_txtDate").val() != "dd/mm/yyyy") {
                          if (this.value.length == 10) {
                              var DateFormate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
                              var FromDate = $('#ctl00_MainContent_txtLabourFromDate_txtDate').val();
                              var Todate = $('#ctl00_MainContent_txtLabourToDate_txtDate').val();

                              var dtToday = new Date();
                              dtToday.setHours(0, 0, 0, 0)
                              if (FromDate != undefined && FromDate != null) {
                                  if (FromDate != "__/__/____" && FromDate != "" && FromDate != "dd/mm/yyyy") {
                                      if (!DateFormate.test(FromDate)) {
                                          $("#ctl00_MainContent_txtLabourFromDate_txtDate").val("");
                                          $("#ctl00_MainContent_txtLabourToDate_txtDate").val("");
                                          $("#ctl00_MainContent_txtLabourFromDate_txtDate").focus();
                                          alertInformation("Please Enter Valid From Date", $("#ctl00_MainContent_txtLabourFromDate_txtDate"));
                                          return false;
                                      }
                                  }
                              }
                          }
                      }
                      if (fromDate && toDate) {
                          if (fromDate > toDate) {
                              $('#ctl00_MainContent_txtLabourFromDate_txtDate').val("");
                              $('#ctl00_MainContent_txtLabourFromDate_txtDate').focus();
                              alertInformation("From Date should not Greater than To Date", $("#ctl00_MainContent_txtLabourFromDate_txtDate"));
                              return false;
                          }
                      }
                  }
              });

              $("#ctl00_MainContent_txtLabourToDate_txtDate").blur(function () {
                  var fromDateVal = $("#ctl00_MainContent_txtLabourFromDate_txtDate").val();
                  var toDateVal = $("#ctl00_MainContent_txtLabourToDate_txtDate").val();

                  if (fromDateVal !== "dd/mm/yyyy" && toDateVal !== "dd/mm/yyyy") {
                      var fromDate = parseDate(fromDateVal);
                      var toDate = parseDate(toDateVal);
                      if ($("#ctl00_MainContent_txtLabourToDate_txtDate").val() != "" && $("#ctl00_MainContent_txtLabourToDate_txtDate").val() != "dd/mm/yyyy") {
                          if (this.value.length == 10) {
                              var DateFormate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
                              var FromDate = $('#ctl00_MainContent_txtLabourFromDate_txtDate').val();
                              var Todate = $('#ctl00_MainContent_txtLabourToDate_txtDate').val();

                              var dtToday = new Date();
                              dtToday.setHours(0, 0, 0, 0)
                              if (Todate != "__/__/____" && Todate != "" && Todate != "dd/mm/yyyy") {
                                  if (!DateFormate.test(Todate)) {
                                      $("#ctl00_MainContent_txtLabourToDate_txtDate").val("");
                                      $("#ctl00_MainContent_txtLabourToDate_txtDate").focus();
                                      alertInformation("Please Enter Valid To Date", $("#ctl00_MainContent_txtLabourToDate_txtDate"));
                                      return false;
                                  }
                              }
                          }
                      }
                      if (fromDate && toDate) {
                          if (toDate < fromDate) {
                              $('#ctl00_MainContent_txtLabourToDate_txtDate').val("");
                              $('#ctl00_MainContent_txtLabourToDate_txtDate').focus();
                              alertInformation("To Date should not be Less than From Date", $("#ctl00_MainContent_txtLabourToDate_txtDate"));
                              return false;
                          }
                      }
                  }
              });

              function parseDate(dateString) {
                  var parts = dateString.split("/");
                  if (parts.length === 3) {
                      var day = parseInt(parts[0], 10);
                      var month = parseInt(parts[1], 10) - 1; // Months are 0-based
                      var year = parseInt(parts[2], 10);
                      return new Date(year, month, day);
                  }
                  return null;
              }

          });