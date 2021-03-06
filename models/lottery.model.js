var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
 
var lotterySchema = new Schema({
    name: String,

    // open|draw|closed
    status: {
      type: String,
      default: 'open'
    },

    ticket_colors: [{
      name: String,
      hex: String
    }],
    
    tickets_sold: [{
      description: String,
      desc_without_number: String,
      color: String,
      letter: String,
      number: String,
      color_hex: String,
      created_at: Date
    }],

    tickets_for_draw: [{
      description: String,
      sold_ticket_id: String
    }],

    drawings: [{
      winning_ticket: String,
      color_hex: String,
      created_at: Date    
    }],

    created_at: {
      type: Date,
      default: Date.now
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }

});
 
mongoose.model('Lottery', lotterySchema);