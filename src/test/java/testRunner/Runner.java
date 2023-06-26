package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		// all the feature files under this folder will be executed
		features = { "src/test/java/features" },

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
		plugin = { "pretty", "html:CucumberReports",
				"json:reports/results.json",
				"junit:reports/results.xml"},

		// adding tags,
		tags = { "@smoke" })

public class Runner extends AbstractTestNGCucumberTests {
}
