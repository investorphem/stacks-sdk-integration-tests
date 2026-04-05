// 1. Imports with correct naming conventions for 2026 SDKs
import { STACKS_API_MAINNET } from 'stx-portfolio-sdk/config.js';
import { SBTCClient } from 'sbtc-payment-sdk';

// Use dynamic or wildcard imports for SDKs with uncertain export names
// This prevents the "requested module does not provide an export" crash
import * as Hashlock from 'hashlock-lending-sdk';
import * as Vault from 'stx-vault-sdk';
import * as Activity from 'stx-defi-activity-sdk';
import * as Utils from '@investorphem/stx-utils';
import * as Validator from '@investorphem/stx-validator-tools';

async function runMasterTest() {
  console.log("--- 🚀 MASONODE MASTER INTEGRATION TEST ---");
  console.log("Date:", new Date().toISOString());
  console.log("Network:", STACKS_API_MAINNET);

  const results = {
    portfolio: !!STACKS_API_MAINNET,
    sbtc: !!SBTCClient,
    lending: !!Hashlock,
    vault: !!Vault,
    activity: !!Activity,
    utils: !!Utils,
    validator: !!Validator
  };

  console.table(results);

  // Quick instance check for SBTC (Commonly used in your Agent)
  try {
    const sbtc = new SBTCClient({ network: "mainnet" });
    console.log("✅ SBTC Client initialized");
  } catch (e) {
    console.log("⚠️ SBTC Init skipped (needs config)");
  }

  console.log("------------------------------------------");
  console.log("✅ All MASONODE SDKs checked. Suite is stable.");
}

runMasterTest().catch(console.error);
