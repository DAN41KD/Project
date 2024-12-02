document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "/api/data";
    const form = document.getElementById("tempForm");
    const tableBody = document.querySelector("#dataTable tbody");
    const avgTempElement = document.getElementById("avgTemp");
    //Table data load and refresh function 
    const loadTable = async() => {
        const response = await fetch(apiURL);
        const data = await response.json();
        //Clear table
        tableBody.innerHTML = "";
        let totalTemp = 0;
        data.forEach(entry => {
            const avgTem = (entry.min_temp + entry.max_temp) / 2;
            totalTemp += avgTem;
            //Make tbody data
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.date}</td>
                <td>${entry.min_temp}</td>
                <td>${entry.max_temp}</td>
                <td>${avgTemp.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        });
        //Counts total average temperature
        const avgTemp = data.lenght > 0 ? totalTemp / data.lenght : 0;
        avgTempElement.textContent = `Vidējā temperatūra visām dienām: ${avgTemp.toFixed(2)}`;
    };
    //Data sending form
    form.addEventListener("submit", async(event) => {
        event.preventDefault();
        const date = document.getElementById("date").value;
        const minTemp = document.getElementById("minTemp").value;
        const maxTemp = document.getElementById("maxTemp").value;
        //Content check
        if (!date || !minTemp || !maxTemp) {
            alert("Visi lauki ir obligātie")
            return;
        }
        const payload = {
            date: date,
            minTemp: parseFloat(minTemp),
            maxTemp: parseFloat(maxTemp),
        };
        //Data giving to JSON
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        //Path check
        if (response.ok) {
            form.reset();
            loadTable();
        } else {
            const erR = await response.json();
            alert(erR.error || "Kļūda saglabājot datus!")
        };
    });
    loadTable();
});