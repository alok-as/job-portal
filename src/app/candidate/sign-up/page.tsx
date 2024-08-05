import { CandidateSignUp } from "@/components/forms/candidate-sign-up/candidate-sign-up";
import { OauthSignInButton } from "@/components/ui/oauth-sign-in-button";
import { DividerText } from "@/components/ui/divider-text";
import { FormHeader } from "@/components/ui/form-header";

const SignUpPage = () => {
	return (
		<section
			id="candidate-sign-up"
			className="flex items-center justify-center py-24"
		>
			<div className="container">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col">
					<FormHeader
						title="Start Applying Today"
						subtitle="Access to all features. No credit card required."
						name="Register"
						className="text-center"
					/>
					<OauthSignInButton>Sign Up with Google</OauthSignInButton>
					<DividerText className="my-5">Or continue with</DividerText>
					<CandidateSignUp />
				</div>
			</div>
		</section>
	);
};

export default SignUpPage;
