import { NextRequest, NextResponse } from "next/server";


export function GET( request: NextRequest,
    {params}: {params:{id: number}}){
    if (params.id > 10)
      return NextResponse.json({error : 'User not found'}, {status: 404} )
    return NextResponse.json({id: 1, name: 'Birhanu' });
    }

    export async function PUT(request: NextRequest, 
       {params}: {params: {id: number} }){
       //Validate the request body
       //if invalid, return 400
       const body = await request.json();
       if (!body.name)
         return NextResponse.json({error: "Name is Required "} , {status: 400})

       //Fetch the user with the given id
       // If doesn't exist, return 404
       if (params.id > 10)
          return NextResponse.json({error: 'user not found '},{status : 404})

       //Update the user 
       //return the updated user
       return NextResponse.json({id: 1, name: body.name})}