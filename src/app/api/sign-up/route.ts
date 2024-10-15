import dbConnect from "@/lib/dbConnect";


export async function POST(request: Request) {
    await dbConnect();

    try {
        const { username, email, password } = await request.json();
        console.log(username, email, password);
    } catch (error) {
        console.log('Error registering user', error);
        return Response.json({
            success: false,
            message: 'Error registering user'
        });
    }
} 