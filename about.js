function myFunction() {
    var x = document.getElementById("readingList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




async function getSheetValues(){
console.log('hi')
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1MwlFcQO1ahD8EAfaRi7Oy-hmQ0sO4qdmtt55SaNxZtc/values/C:H`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ya29.a0AeTM1ic4p5WXZjxqJjCydugzO21PDlqc1YsK-Qi0-DX9SFr9OYfHsjEodtembwR1zaWBG9zeUd45_xB8dJCqfy9jJh0VaxUDLy4Ag5ACjuOmvJcdmcmuYp4b6naGcxb9UaQZnttGiURtp4Gnf2G0TrZtlgNuaCgYKAT4SARISFQHWtWOm6LLU9mIZZ4mrTBGP4sWlBA0163`  
    }
    });
    const data = await request.json();
    console.log(data);
    let n = Math.floor(Math.random()*31)
     console.log(data.values[n][0])
     console.log(data.values[n][1])
    console.log(data.values[n][5])

    fetch(data)
    document.getElementById("BookName").innerHTML = data.values[n][0]
    document.getElementById("Rate").innerHTML = data.values[n][1]
    document.getElementById("Link").innerHTML = data.values[n][5]
  
  }

