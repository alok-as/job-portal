import { CompanySignUp } from "@/components/forms/company-sign-up/company-sign-up";
import { FormHeader } from "@/components/ui/form-header";

const SignUpPage = () => {
	return (
		<section
			id="company-sign-up"
			className="flex items-center justify-center py-24"
		>
			<div className="container">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col">
					<FormHeader
						title="Start Hiring Today"
						subtitle="Access to all features. No credit card required."
						name="Register"
						className="text-center"
					/>
					<CompanySignUp />
				</div>
			</div>
		</section>
	);
};

export default SignUpPage;
