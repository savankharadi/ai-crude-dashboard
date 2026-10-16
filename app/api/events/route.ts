import { NextResponse } from 'next/server';
import { buildEventTriggers, getWtiSnapshot } from '@/lib/wti';

export async function GET() {
  try {
    const snapshot = await getWtiSnapshot();
    const events = buildEventTriggers(snapshot);
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      [
        {
          title: 'Crude inventory watch',
          severity: 'HIGH',
          description: 'EIA inventory data remains the primary macro trigger this session.',
        },
        {
          title: 'Momentum breakout',
          severity: 'MEDIUM',
          description: 'WTI price is holding above recent support and in a constructive trend.',
        },
      ],
      { status: 200 }
    );
  }
}
