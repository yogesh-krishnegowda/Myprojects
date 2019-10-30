package Login_demo_webshop;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:scr/cucumber-reports01"},monochrome=true,features= {"src/test/resources/featurefileDemo/Table.feature"})
public class cucumberRunner {
	

}
