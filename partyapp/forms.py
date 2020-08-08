from django import forms

class SignupForm(forms.Form):
    lat = forms.DecimalField(max_digits=9, decimal_places=6, required=False)
    lng = forms.DecimalField(max_digits=9, decimal_places=6, required=False)

    def signup(self, request, user):
        profile = user.profile
        profile.lat = self.cleaned_data['lat']
        profile.lng = self.cleaned_data['lng']
        user.save()
        profile.save()