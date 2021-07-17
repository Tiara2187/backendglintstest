const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true, partialFilterExpression: {email: {$exists:true }},
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    }
},
{
    timestamps: true
})

userSchema.pre('save', function (next) {
    User.findOne({ username: this.username, email: this.email })
      .then((user) => {
        if (user) {
          next({ name: 'EMAIL_ALREADY_EXISTS' });
        } else {
          this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
          next();
        }
      })
      .catch((any) => next('MONGOOSE_ERROR'));
  });
const User = mongoose.model('User', userSchema);
module.exports = User;
