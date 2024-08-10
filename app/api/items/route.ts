'use server';

import { NextResponse } from 'next/server';

export const POST = async () => {
	return NextResponse.json({ msg: 'hi, this test succesfully passed' });
};
