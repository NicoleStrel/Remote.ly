from django import forms

class SignupForm(forms.Form):
    lat = forms.DecimalField(max_digits=9, decimal_places=6)
    lng = forms.DecimalField(max_digits=9, decimal_places=6)

    def signup(self, request, user):
        profile = user.profile
        profile.lat = self.cleaned_data['lat']
        profile.lng = self.cleaned_data['lng']
        user.save()
        profile.save()
# class SignupForm(forms.Form):
#     lat = forms.CharField(max_length=30, label='Voornaam')
#     last_name = forms.CharField(max_length=30, label='Achternaam')
#
#     def signup(self, request, user):
#         user.first_name = self.cleaned_data['first_name']
#         user.last_name = self.cleaned_data['last_name']
#         user.save()