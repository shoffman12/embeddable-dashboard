function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function loadUseageDash() {
    var api_key=getParameterByName('api_key');
    var customer_id=getParameterByName('customer_id');

    console.log("API key is "+api_key);
    console.log("Customer ID is "+customer_id)

    var payload = {
      "customer_id": customer_id,
      "dashboard": "usage"
    }

    var options = {
            data: JSON.stringify(payload)
        };

    
    innerHTML = "<iframe id='usage' class='dashboard' src='https://embedded-dashboards.metronome.com/dashboards/customer/usage/v1/?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxNDczNGU0LWVjZGUtNDRkMS05ZmExLTNlZmJkNTJiYTM3NyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImN1c3RvbWVyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJjdXN0b21lciJdLCJ4LWhhc3VyYS1jbGllbnQtaWQiOiJiODU3NTc0Yy0wNjEyLTRmYTEtOGJkMi02YTUwZmIxZmI3MjciLCJ4LWhhc3VyYS1lbnZpcm9ubWVudC10eXBlIjoiUFJPRFVDVElPTiIsIngtaGFzdXJhLWN1c3RvbWVyLWlkIjoiMmE1ZjUxMTQtMzRiZS00OTdkLTkyMjEtMzQ0OTMzOTY1ZGVjIn0sImlhdCI6MTcwMjM1NTIwNCwiaXNzIjoiZ2F0ZWtlZXBlciIsImF1ZCI6ImdyYXBocWwiLCJleHAiOjE3MDIzNTg4MDR9.S6VkmHvqQE5Dv8PdlsupsBLHdLsbu7gRl3GB9phF8XHwyN7PjrO_Pk7GArqI_tb9nP2s9_ervBFnDgbmzUwZdGZw7hIdr3NA5MT_JrKNaQk-K3WFPsgjKz-_yOpo8mFQdGUWO9lKLqujg_RLcaSEs0Wl62X6MesRmu2zgAvQb9sjT7mk5HxSjJMbsesjieLTnGKvB2FmTCxPvjTBXxolsVA-vxqQIXwTpMUCyhWhi2ijpKUgyXKROCiKJSahbOqAltRLrDMqgAzs43iS44s2beJVtLLI5og9qLBeKTwad-aI6NhSYCxXrVC7yUoTiPsCanZUVnFahwIIl2eeolJalBHRRX-zwHYxEQDqkpU82jGlyfOWDZxB6SkwXHkl23kEc5iMlHCKmV80idEZfAJ28OJgBDbamqnWROjEcobC7FpAXPyS3D04CYN3vgfJ51VtuO6_HDlLtMhtRqLHzx-1E-57yOqvleH08-Vg3OhUAjMfYQDXMmzgojIDT8WyYF9ARz6JtiOhMLPf9w_fXE4EA0n2jHTSMu1QL0oJODLDDjEzsBJ4tGABU3rcyYBJQMwFJv8td8HZ3r8sIOvk8FTST6WovLoSpjTg9hvwzkH3R3VcxVPKCEErZ9i9zKy84qMIE672zwYSaL67PZhD_OBBuKAeiOAlaHrXTlqgUBVOCbU'></iframe>"
    document.getElementById("dashboard-view").innerHTML = innerHTML;
};

function getEmbeddableDashboard(options) {


    var merged = $.extend(true, {}, {
            type: "POST",
            dataType: "json",
            headers: {
                "Accept": "application/vnd.pagerduty+json;version=2.0",
                "Authorization": "Bearer 2d2007d0ba8026f8ad8cefcbabfa328928fc11a95074f1dabc85eb354ee0c738",
                "Access-Control-Allow-Credential": true,
                "Access-Control-Allow-Origin": null
            },
            url: "https://api.metronome.com/v1/dashboards/getEmbeddableUrl"

        },
        options);

    output = $.ajax(merged);


}



$('#invoices').on('click', function() {
    var api_key=getParameterByName('api_key');
    var customer_id=getParameterByName('customer_id');

    console.log("API key is "+api_key);
    console.log("Customer ID"+customer_id)


    innerHTML = "<iframe id='usage' class='dashboard' src='https://embedded-dashboards.metronome.com/dashboards/customer/invoices/v1/?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxNDczNGU0LWVjZGUtNDRkMS05ZmExLTNlZmJkNTJiYTM3NyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImN1c3RvbWVyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJjdXN0b21lciJdLCJ4LWhhc3VyYS1jbGllbnQtaWQiOiJiODU3NTc0Yy0wNjEyLTRmYTEtOGJkMi02YTUwZmIxZmI3MjciLCJ4LWhhc3VyYS1lbnZpcm9ubWVudC10eXBlIjoiUFJPRFVDVElPTiIsIngtaGFzdXJhLWN1c3RvbWVyLWlkIjoiMmE1ZjUxMTQtMzRiZS00OTdkLTkyMjEtMzQ0OTMzOTY1ZGVjIn0sImlhdCI6MTcwMjM1NTIwNSwiaXNzIjoiZ2F0ZWtlZXBlciIsImF1ZCI6ImdyYXBocWwiLCJleHAiOjE3MDIzNTg4MDV9.Um96isvL-wN0gwxaXoo8fI8eYHS5YSo3-r0Ykd3Qv1iv3clva_bYBDm4nKCM84TTwqlv4shHErr3q1rT5qm3fiAwgnQ5NOaBAyeid5ukhgckPyVdFmHaDU_Ysq5GHz_LoCfcixJOkXaCjXKhSypRy1wD2rErrImoWcbb0w18tXkTJ2wgGxzvSArgvGo_HJVZi1KkzbabBgMijJoeQqznQkflv-6INVrKtOUG9YvtI-0yeTNsPyjP2RCF74OYscSqQ-tcvwqt4FJXGE5VHQEt6zCNv5O8fSfLOBAbO6MaK7lLskUZpEh-du5S0Go6rRgM3dxI5i0Rot7CTIKjbACvsrH4Zy4gG_U79HF5Eyem7CS6ooAwFd_5gpQ_GScEWD0JFll_JX4PMxkjoOeIKS49T1JX-7njNRNA6TjIMzqSJ9brZO2_L8yjdQ6LBYDls34JQ9eQqDLp4KFSqCfCF6VwkHBX5bVnziGhBNRCvR1fTBFfeKP481T_idQfzhDvZnZQ9WpXCKncfCcTya84nk4GH5JAoButN88A6idaoF04otWYfQZ0OJvRDWGGrW75enWOQv1KOHk5rArXV19lSzuE-SArUa8UONE1QkdhJZqNjmdf-B-8B1InB14jcT98E2IxZZ7fMtsnMl7QZ994YfzeJtpvjbvFHY5LBktNaGsFzU4'></iframe>"
    document.getElementById("dashboard-view").innerHTML = innerHTML;
    
});

$('#credits').on('click', function() {
    var api_key=getParameterByName('api_key');
    var customer_id=getParameterByName('customer_id');

    console.log("API key is "+api_key);
    console.log("Customer ID"+customer_id)

    innerHTML = "<iframe id='usage' class='dashboard' src='https://embedded-dashboards.metronome.com/dashboards/customer/credits/v1/?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxNDczNGU0LWVjZGUtNDRkMS05ZmExLTNlZmJkNTJiYTM3NyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImN1c3RvbWVyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJjdXN0b21lciJdLCJ4LWhhc3VyYS1jbGllbnQtaWQiOiJiODU3NTc0Yy0wNjEyLTRmYTEtOGJkMi02YTUwZmIxZmI3MjciLCJ4LWhhc3VyYS1lbnZpcm9ubWVudC10eXBlIjoiUFJPRFVDVElPTiIsIngtaGFzdXJhLWN1c3RvbWVyLWlkIjoiMmE1ZjUxMTQtMzRiZS00OTdkLTkyMjEtMzQ0OTMzOTY1ZGVjIn0sImlhdCI6MTcwMjM1NTIwNSwiaXNzIjoiZ2F0ZWtlZXBlciIsImF1ZCI6ImdyYXBocWwiLCJleHAiOjE3MDIzNTg4MDV9.Um96isvL-wN0gwxaXoo8fI8eYHS5YSo3-r0Ykd3Qv1iv3clva_bYBDm4nKCM84TTwqlv4shHErr3q1rT5qm3fiAwgnQ5NOaBAyeid5ukhgckPyVdFmHaDU_Ysq5GHz_LoCfcixJOkXaCjXKhSypRy1wD2rErrImoWcbb0w18tXkTJ2wgGxzvSArgvGo_HJVZi1KkzbabBgMijJoeQqznQkflv-6INVrKtOUG9YvtI-0yeTNsPyjP2RCF74OYscSqQ-tcvwqt4FJXGE5VHQEt6zCNv5O8fSfLOBAbO6MaK7lLskUZpEh-du5S0Go6rRgM3dxI5i0Rot7CTIKjbACvsrH4Zy4gG_U79HF5Eyem7CS6ooAwFd_5gpQ_GScEWD0JFll_JX4PMxkjoOeIKS49T1JX-7njNRNA6TjIMzqSJ9brZO2_L8yjdQ6LBYDls34JQ9eQqDLp4KFSqCfCF6VwkHBX5bVnziGhBNRCvR1fTBFfeKP481T_idQfzhDvZnZQ9WpXCKncfCcTya84nk4GH5JAoButN88A6idaoF04otWYfQZ0OJvRDWGGrW75enWOQv1KOHk5rArXV19lSzuE-SArUa8UONE1QkdhJZqNjmdf-B-8B1InB14jcT98E2IxZZ7fMtsnMl7QZ994YfzeJtpvjbvFHY5LBktNaGsFzU4'></iframe>"
    document.getElementById("dashboard-view").innerHTML = innerHTML;
});

