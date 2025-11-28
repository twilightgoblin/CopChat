const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import models
const AnonymousComplaintForm = require('./models/AnonymousComplaintForm');
const LostAndFoundForm = require('./models/LostAndFoundForm');
const LockedHouseMonitoringForm = require('./models/LockedHouseMonitoringForm');
const WomenCompanionForm = require('./models/WomenCompanionForm');
const LoudSpeakerForm = require('./models/LoudSpeakerForm');
const SeniorCitizenForm = require('./models/SeniorCitizenForm');

const MONGODB_URI = process.env.MONGODB_URI;
const uploadsDir = path.join(__dirname, 'uploads');

async function checkMissingFiles() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB\n');

    // Get all files in uploads directory
    const existingFiles = fs.readdirSync(uploadsDir)
      .filter(file => file !== '.gitkeep')
      .map(file => `/uploads/${file}`);
    
    console.log(`Found ${existingFiles.length} files in uploads directory\n`);

    const models = [
      { name: 'AnonymousComplaint', model: AnonymousComplaintForm, field: 'evidence' },
      { name: 'LostAndFound', model: LostAndFoundForm, field: 'image' },
      { name: 'LockedHouseMonitoring', model: LockedHouseMonitoringForm, field: 'additionalFiles' },
      { name: 'WomenCompanion', model: WomenCompanionForm, field: 'additionalFiles' },
      { name: 'LoudSpeaker', model: LoudSpeakerForm, field: 'additionalFiles' },
      { name: 'SeniorCitizen', model: SeniorCitizenForm, field: 'additionalFiles' },
    ];

    let totalMissing = 0;
    let totalFormsWithMissing = 0;

    for (const { name, model, field } of models) {
      console.log(`\n=== ${name} Forms ===`);
      const forms = await model.find();
      console.log(`Total forms: ${forms.length}`);

      let formsWithMissing = 0;
      let missingCount = 0;

      for (const form of forms) {
        let missingFiles = [];

        if (field === 'evidence' || field === 'additionalFiles') {
          // Array field
          const files = form[field] || [];
          missingFiles = files.filter(file => !existingFiles.includes(file));
        } else if (field === 'image') {
          // Single file field
          if (form[field] && !existingFiles.includes(form[field])) {
            missingFiles.push(form[field]);
          }
        }

        if (missingFiles.length > 0) {
          formsWithMissing++;
          missingCount += missingFiles.length;
          console.log(`\n  Form ID: ${form._id}`);
          console.log(`  Missing files (${missingFiles.length}):`);
          missingFiles.forEach(file => console.log(`    - ${file}`));
        }
      }

      if (formsWithMissing > 0) {
        console.log(`\n  Summary: ${formsWithMissing} forms with ${missingCount} missing files`);
        totalFormsWithMissing += formsWithMissing;
        totalMissing += missingCount;
      } else {
        console.log('  ✓ All files exist');
      }
    }

    console.log('\n\n=== OVERALL SUMMARY ===');
    console.log(`Total forms with missing files: ${totalFormsWithMissing}`);
    console.log(`Total missing file references: ${totalMissing}`);
    console.log(`Files in uploads directory: ${existingFiles.length}`);
    
    if (totalMissing > 0) {
      console.log('\n💡 To clean up the database, run: node cleanup-missing-files.js');
    }

  } catch (error) {
    console.error('Error during check:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
}

// Run the check
checkMissingFiles();
