class Invitation < ApplicationMailer
  def invite_email(user)
    @user = user
    mail(to: @user.email, subject: 'Invitation Email')
  end
end
