"use client";
export default function Home() {
  return (
    <>
      <div className="h-100% bg-[#DEDED1]">
        <div className="flex flex-col p-5 rounded-2xl shadow-2xl">
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 1</h1>
            <p>
              Talk about how you made your site and why you chose the tools you
              did. Briefly explain one challenge you experienced in setting up
              this site and how you overcame it.
            </p>
            <p className="text-green-500">answer:</p>
            <p>
              I used Next.js because even though it&apos;s a bit more advanced
              than plain React, it makes building and deploying websites easier.
              It also handles routing automatically, which saved me time setting
              up navigation between pages. One challenge I faced was getting the
              site to display properly after deployment. At first, some assets
              weren&apos;t loading because of incorrect file paths. I fixed this
              by double-checking my folder structure and updating the links to
              use relative paths, and everything worked fine after that.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 2</h1>
            <p>
              What did you think of our service during the time you used it?
              Provide some constructive criticism or some features that
              impressed you.
            </p>
            <p className="text-green-500">answer:</p>
            <p>
              I found Netlify really impressive, the deployment process was
              quick, smooth, and required very minimal configuration. I
              especially liked how it automatically detects my GitHub repository
              and redeploys the site whenever I push new changes. The dashboard
              is also clean and easy to navigate, which made managing my site
              simple even without needing much setup. For constructive feedback,
              I think the build error messages could be a bit more detailed for
              beginners. Sometimes, the logs can be a little hard to interpret
              if you&apos;re not deeply familiar with the framework being used.
              Adding clearer hints or common fix suggestions would make
              troubleshooting easier.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 3</h1>
            <p>
              Rank your 5 favorite and 5 least favorite activities from this
              list:
              https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab
            </p>
            <p className="text-green-500">answer:</p>
            <p>My 5 Favorite Activities:</p>
            <p>• Respond to Netlify customers on Twitter</p>
            <p>• Respond to 20+ support requests via email every day</p>
            <p>• Write and maintain Support Guides for our product</p>
            <p>
              • Work with the development team to help design a new feature
              based on feedback from customers
            </p>
            <p className="pb-2">
              • Debug a customer&apos;s build using a programming language and
              framework that you&apos;ve never seen before
            </p>
            <p>My 5 Least Activities:</p>
            <p>
              • Work with prospective customers to explain our service and the
              pricing model
            </p>
            <p>• Develop a code example to share with a customer</p>
            <p>• Manage a Support team</p>
            <p>
              • Debug a customer&apos;s build using a programming language and
              framework that you&apos;ve never seen before
            </p>
            <p>
              • Join a Zoom call with a VIP customer you have been helping via
              email, upon their request
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 4</h1>
            <p>
              Provide a link to documentation for a technical/developer-focused
              product, which you think are well done, and explain why you think
              they are well done.
            </p>
            <p className="text-green-500">answer:</p>
            <p>
              I think the React documentation (https://react.dev/ ) is an
              excellent example of well-done technical documentation. The
              structure is clean and intuitive, starting from the basics for
              beginners while also offering in-depth sections for experienced
              developers. Each concept is explained with clear examples, concise
              explanations, and interactive demos that make learning hands-on. I
              also like how it&apos;s written in plain language, it avoids
              unnecessary jargon while still being technically accurate. What
              makes it stand out is the combination of clarity, structure, and
              accessibility. The new “Learn” section guides readers through
              step-by-step lessons, making it easier to follow complex concepts.
              Overall, the React docs demonstrate how great documentation can
              make a framework easier and more enjoyable to learn.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 5</h1>
            <p>
              Explain, in a couple of paragraphs, what you think are two major
              challenges around DNS configuration for less-technical customers
              hosting websites.
            </p>
            <p className="text-green-500">answer:</p>
            <p className="pb-2">
              One major challenge for less-technical customers when dealing with
              DNS configuration is understanding how DNS records work and
              propagate. Terms like A record, CNAME, TXT, and MX can be
              confusing, and even small mistakes such as pointing a record to
              the wrong IP or forgetting a period at the end of a hostname can
              cause a site to break or emails to stop working. On top of that,
              DNS propagation delays can make troubleshooting difficult, since
              changes don&apos;t take effect immediately, leading users to think
              their configuration is wrong when it may just need more time.
            </p>
            <p>
              Another challenge is managing DNS across multiple services. Many
              users host their domains on one platform, their website on
              another, and email somewhere else. This creates confusion about
              where to make DNS updates or which service is controlling which
              records. Without clear guidance, it&apos;s easy for users to
              accidentally overwrite critical records or disconnect parts of
              their setup. Overall, the complexity of DNS terminology and the
              lack of immediate feedback make it one of the more intimidating
              aspects of website hosting for less-technical users.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 6</h1>
            <p>
              A customer writes in to Support saying simply that their “site
              won&apos;t build”. You have access to their build logs, and there
              you see this error: Build failed due to a user error: Build script
              returned non-zero exit code: 2. You have no more information than
              this and the site&apos;s source repository is private so you
              cannot test the build yourself. How would you troubleshoot this
              issue? What steps would you take? Also, please compose your best
              customer-facing first response.
            </p>
            <p className="text-green-500">answer:</p>
            <p className="pb-2">
              Since the error message indicates a non-zero exit code: 2, it
              means the build script failed, usually due to a problem in the
              project&apos;s code, dependencies, or configuration. My first step
              would be to check the build logs in more detail to identify which
              part of the process failed (for example, during dependency
              installation, environment setup, or the actual build command).
              I&apos;d look for any stack traces, missing modules, or syntax
              errors.
            </p>
            <p className="pb-2">
              If the logs don&apos;t provide enough context, I&apos;d review the
              site&apos;s build settings (like the build command, environment
              variables, and framework detection) to ensure they match the
              project&apos;s requirements. I&apos;d also confirm whether any
              recent package updates or file changes could have introduced the
              issue. Since the repository is private, I&apos;d ask the customer
              to share relevant parts of their build configuration or the error
              output locally.
            </p>
            <p className="pb-2">
              If needed, I&apos;d suggest reproducing the build locally using
              the same build command (npm run build, for instance) to see if the
              issue occurs outside Netlify, this helps confirm whether it&apos;s
              a code issue or a platform issue.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 7</h1>
            <p>
              How would you set up an http 301 status redirect from
              “/netlify/anything” on your site, to
              https://www.google.com/search?q=anything. Please provide the
              redirect formatting here. Now, how about a proxy redirect? Please
              add that proxy redirect rule directly to your site!
            </p>
            <p className="text-green-500">answer:</p>
            <p>
              To set up the redirects, I added a netlify.toml file in the root
              directory of my project and included the following configuration:
            </p>
            <p>
              [[redirects]] from = &quot;/netlify/:anything&quot; to =
              &quot;https://www.google.com/search?q=:anything&quot; status = 301
              force = true [[redirects]] from = &quot;/proxy/:anything&quot; to
              = &quot;https://www.google.com/search?q=:anything&quot; status =
              200 force = true
            </p>
            <p>
              The first rule sets up an HTTP 301 redirect, which permanently
              redirects any path starting with /netlify/ to a Google search
              query using the captured parameter. The second rule is a proxy
              redirect (status = 200), which serves the Google search results
              through my site instead of sending the user&apos;s browser to
              Google directly. I implemented this by creating a netlify.toml
              file at the root of my Next.js project, which Netlify
              automatically detects and applies during deployment.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 8</h1>
            <p>
              Please attempt to deploy a function on our service. This need not
              be complicated. It could be &quot;Hello World&quot;. Note that
              failure to deploy is not failing the exercise! Whether you have
              trouble or not, please describe what you experienced and how you
              attempted to troubleshoot any issues you encountered.
            </p>
            <p className="text-green-500">answer:</p>
            <p>
              After reading the Netlify function documentation and researching,
              I created a netlify/functions folder and added a simple
              &quot;Hello World&quot; function. I then updated the netlify.toml
              file to define the functions directory. During deployment, the
              function didn&apos;t show up at first, so I reviewed the docs
              again, verified the folder structure, and redeployed. After that,
              the function deployed successfully and returned the expected
              &quot;Hello World&quot; response.
            </p>
          </div>
          <div className="mb-5">
            <hr className="pb-3" />
            <h1>Question 9</h1>
            <p>
              We understand you don&apos;t know anything about our internal
              procedures at this stage, but we want you to explain at a high
              level how you&apos;d react to this situation: You receive a report
              of a severe security issue on www.netlify.com. You can&apos;t
              immediately confirm the report, so what steps might you take to
              investigate or substantiate the report? What might you say to the
              reporter, even though we haven&apos;t confirmed their assertion
              yet, that will instill confidence that our business is very
              concerned about security? You believe there is a reasonable chance
              the report is correct and the problem is very large and impactful.
              How might you escalate?
            </p>
            <p className="text-green-500">answer:</p>
            <p className="pb-2">
              First, I&apos;d acknowledge the report immediately and thank the
              reporter for bringing the issue to our attention. Even before
              confirming the problem, I&apos;d reassure them that we take all
              security concerns seriously and are investigating the matter
              promptly.
            </p>
            <p className="pb-2">
              Next, I&apos;d begin by gathering details, checking logs,
              reproducing the issue in a controlled environment, and reviewing
              recent deployments or configuration changes that might relate to
              the report. I&apos;d also coordinate with the appropriate internal
              teams (such as engineering or security) to validate the claim and
              assess potential impact.
            </p>
            <p className="pb-2">
              If the issue seems legitimate and potentially severe, I&apos;d
              escalate it through the proper channels, alerting the security
              team, management, and possibly initiating our incident response
              procedures. Throughout, I&apos;d maintain transparent and
              professional communication with the reporter, letting them know
              that the issue is under active review and that they&apos;ll
              receive an update once we have verified the findings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
