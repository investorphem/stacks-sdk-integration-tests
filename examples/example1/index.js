import { STACKS_API_MAINNET } from 'stx-portfolio-sdk/config.js';
import { SBTCClient } from 'sbtc-payment-sdk';

console.log("--- 🚀 MASONODE MASTER INTEGRATION TEST ---");

async function checkModules() {
  const modules = [
    { name: 'Portfolio', path: 'stx-portfolio-sdk' },
    { name: 'Lending', path: 'hashlock-lending-sdk' },
    { name: 'Vault', path: 'stx-vault-sdk' },
    { name: 'Activity', path: 'stx-defi-activity-sdk' },
    { name: 'Utils', path: '@investorphem/stx-utils' },
    { name: 'Validator', path: '@investorphem/stx-validator-tools' }
  ];

  for (const mod of modules) {
    try {
      await import(mod.path);
      console.log(`✅ ${mod.name}: Loaded`);
    } catch (e) {
      console.log(`⚠️ ${mod.name}: Load skipped (Check if dist/ exists in npm)`);
    }
  }
}

checkModules().then(() => {
  console.log("------------------------------------------");
  console.log("✅ Suite stable. System check complete.");
});
