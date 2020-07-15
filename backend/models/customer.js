const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const uniqueValidator = require('mongoose-unique-validator');

const customersSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  date_birth: {
    type: Date,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  },
  date_first_rdv: {
    type: Date,
    required: false
  },
  observation: {
    type: String,
    required: false
  },
  nature_ongle: {
    sains: {
      type: Boolean,
      required: false
    },
    abimes: {
      type: Boolean,
      required: false
    },
    ronges: {
      type: Boolean,
      required: false
    },
    autres: {
      type: Boolean,
      required: false
    }
  },
  matiere_utilisee: {
    gel: {
      type: Boolean,
      required: false
    },
    resine: {
      type: Boolean,
      required: false
    },
    vsp: {
      type: Boolean,
      required: false
    },
    acrygel: {
      type: Boolean,
      required: false
    }
  },
  technique_utilisee: {
    chablons: {
      type: Boolean,
      required: false
    },
    capsules: {
      type: Boolean,
      required: false
    },
    gainage_gel: {
      type: Boolean,
      required: false
    },
    gainage_vsp: {
      type: Boolean,
      required: false
    }
  },
  type_peau:{
    seche: {
      type: Boolean,
       required: false
     },
    normale: {
      type: Boolean,
      required: false
    },
    grasse: {
      type: Boolean,
      required: false
    },
    mixte: {
      type: Boolean,
      required: false
    }
  },
  forme_cuticule: {
    carre: {
      type: Boolean,
      required: false
    },
    ovale: {
      type: Boolean,
      required: false
    },
    en_v: {
      type: Boolean,
      required: false
    },
    autre: {
      type: Boolean,
      required: false
    }
  },
  job: {
    type: Boolean,
    required: false
  },
  sport: {
    type: Boolean,
    required: false
  },
  fumeuse: {
    type: Boolean,
    required: false
  },
  medicaments: {
    type: Boolean,
    required: false
  },
  problemes: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model('customers', customersSchema);
