class SendEmailJob < ActiveJob::Base
  queue_as :default

  def perform(user)
    @user = user
    Invitation.invite_email(@user).deliver
  end
end
