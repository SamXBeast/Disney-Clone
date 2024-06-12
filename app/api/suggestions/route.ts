export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");
  
    const res = await fetch(
      `https://disney-clone-22.azurewebsites.net/api/getaisuggestions?term=${term}`,
    // `https://disney2clone.azurewebsites.net/api/getaisuggestion?term=${term}`,
      {
        method: "GET",
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );
  
    const message = await res.text();
  
    return Response.json({ message });
  }