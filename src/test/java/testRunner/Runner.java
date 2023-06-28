package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		// all the feature files under this folder will be executed
		features = { "src/test/java/features/login.feature" },

		// if dryrun is set to true, it will not be executed but will rather check the
		// code i.e. mapping
		//dryRun = true,

		// by default it is set to SnakeCase. In order to change type, use below
		snippets = SnippetType.CAMELCASE,

		// removes junk characters
		monochrome = false,

		// to map step definition files
		glue = {"steps", "hooks", "pages"},

		// pretty will display the actual function it executed instead of just dots
				plugin =  "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
				
//				plugin = {"pretty", "html:CucumberReports",
//						"json:reports/result.json",
//						"junit:reports/result.xml"}
//				tags = {"@smoke and  @reg"}
				)

public class Runner extends AbstractTestNGCucumberTests {
}
