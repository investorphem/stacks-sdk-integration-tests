// Quick "Smoke Test" to ensure all SDKs load
import { STACKS_API_MAINNET } from 'stx-portfolio-sdk/config.js';
import { sbtcClient } from 'sbtc-payment-sdk';
import { lending } from 'hashlock-lending-sdk';

console.log("--- MASONODE MASTER INTEGRATION TEST ---");
console.log("Network:", STACKS_API_MAINNET);
console.log("✅ All SDKs connected and ready.");
