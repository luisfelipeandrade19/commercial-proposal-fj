
const url = "https://opensheet.elk.sh/1_r21VCtPgOCeudcsY1PqKANn1Kgg_BiFx8hWXUVYu30/Página1!A3:Z";

try {
    const response = await fetch(url);
    if (!response.ok) {
        console.log("Response not OK:", response.status, response.statusText);
        const text = await response.text();
        console.log("Body:", text);
    } else {
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    }
} catch (error) {
    console.error("Fetch error:", error.message);
}
