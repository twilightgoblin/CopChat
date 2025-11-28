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

async function cleanupMissingFiles() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get all files in uploads directory
    const existingFiles = fs.readdirSync(uploadsDir)
      .filter(file => file !== '.gitkeep')
      .map(file => `/uploads/${file}`);
    
    console.log(`\nFound ${existingFiles.length} files in uploads directory:`);
    existingFiles.forEach(file => console.log(`  - ${file}`));

    const models = [
      { name: 'AnonymousComplaint', model: AnonymousComplaintForm, field: 'evidence' },
      { name: 'LostAndFound', model: LostAndFoundForm, field: 'image' },
      { name: 'LockedHouseMonitoring', model: LockedHouseMonitoringForm, field: 'additionalFiles' },
      { name: 'WomenCompanion', model: WomenCompanionForm, field: 'additionalFiles' },
      { name: 'LoudSpeaker', model: LoudSpeakerForm, field: 'additionalFiles' },
      { name: 'SeniorCitizen', model: SeniorCitizenForm, field: 'additionalFiles' },
    ];

    let totalCleaned = 0;
    let totalMissing = 0;

    for (const { name, model, field } of models) {
      console.log(`\n\nChecking ${name} forms...`);
      const forms = await model.find();
      console.log(`Found ${forms.length} ${name} forms`);

      for (const form of forms) {
        let needsUpdate = false;
        let missingFiles = [];

        if (field === 'evidence' || field === 'additionalFiles') {
          // Array field
          const files = form[field] || [];
          const validFiles = files.filter(file => {
            const exists = existingFiles.includes(file);
            if (!exists) {
              missingFiles.push(file);
              totalMissing++;
            }
            return exists;
          });

          if (validFiles.length !== files.length) {
            form[field] = validFiles;
            needsUpdate = true;
          }
        } else if (field === 'image') {
          // Single file field
          if (form[field] && !existingFiles.includes(form[field])) {
            missingFiles.push(form[field]);
            totalMissing++;
            form[field] = null;
            needsUpdate = true;
          }
        }

        if (needsUpdate) {
          await form.save();
          totalCleaned++;
          console.log(`  ✓ Cleaned form ${form._id}`);
          console.log(`    Missing files removed: ${missingFiles.join(', ')}`);
        }
      }
    }

    console.log('\n\n=== CLEANUP SUMMARY ===');
    console.log(`Total forms cleaned: ${totalCleaned}`);
    console.log(`Total missing file references removed: ${totalMissing}`);
    console.log(`Files in uploads directory: ${existingFiles.length}`);

  } catch (error) {
    console.error('Error during cleanup:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
}

// Run the cleanup
cleanupMissingFiles();
