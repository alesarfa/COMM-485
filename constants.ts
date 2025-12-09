export const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Process', href: '#process' },
  { label: 'The App', href: '#app' },
  { label: 'Results', href: '#results' },
];

// Placeholder content strings to be replaced by the user later
export const CONTENT = {
  section1: `At CT Consulting, mornings didn’t start with strategic planning. They started with checking. Endless checking.

Before the team could process a single order, they had to manually verify PDFs against internal records. It was a tedious, eye-straining process that consumed the most productive hours of the day.

WeWill.ai stepped in not just to automate a task, but to understand that bottleneck, and then build a custom app around the way CT actually works.`,
  
  section2: `If you looked only at CT’s showroom, you’d see sleek products and modern design. But behind the scenes, the document chain was a complex web of legacy formats.

From Order Confirmations (OC) to Order Forms (OF), changing to Customer Order Forms (COF), then Delivery Dockets (DDT), and finally Invoices. Each step generated a new PDF. Each PDF had to be perfect.

It was a system built on a lot of PDFs, and a heavy dependence on human memory and attention.`,
  
  section3: `When CT Consulting first reached out, they thought they needed a standard OCR tool. But during our initial workshops, we dug deeper.

We mapped the entire workflow on a whiteboard. We watched them work. We realized the problem wasn't just reading text—it was the cognitive load of comparing line items across three different document versions.

That was the bottleneck worth solving.`,

  section4: `On the surface, manually checking confirmations seemed like "part of the job." But the math told a different story.

One senior staff member was spending nearly half their day just cross-referencing papers. That meant highly skilled talent was being used for data entry verification instead of client relations or sales.

We calculated the hidden cost, and it was staggering. It became our mission to remove the parts of their job that made no sense to keep manual.`,

  section5: `Based on what they learned in the consulting phase, the engineering team sketched a solution that didn't disrupt the existing ERP.

We designed a "WeWill Layer"—an intelligent middleware that sits between the email inbox and the ERP. It doesn't replace the humans; it augments them.

It was designed to handle the heavy lifting of data extraction and comparison, presenting only the discrepancies for human review.`,

  section6: `In daily life at CT, the WeWill Layer behaves like a quiet, tireless colleague. It monitors the inbox, grabs incoming PDFs, reads them, and compares them to the original order data.

If everything matches, it auto-approves. If there's a mismatch—a price difference, a wrong quantity, an extra item—it flags it.

The dashboard highlights exactly what's wrong, helping CT understand where errors come from and how to reduce them.`,

  section7: `One real example made the value of the app very tangible early on. A supplier sent a confirmation that looked correct at a glance.

But the app flagged a discrepancy. Buried in line 42 was an item code that had never been ordered—5 extra units of a high-value component.

A human might have missed it in the sea of text. The app caught it instantly, saving thousands of Euros for something that had never been ordered.`,

  section8: `Over time, the impact of the WeWill Layer became undeniable. The morning routine changed from panic to peace.

Processing a complex document went from over 15 minutes to under 4. The backlog disappeared. The team reclaimed their mornings.

It wasn't magic; it was engineering. But it all started from that first bottleneck: too many hours on COF checks.`,

  section9: `Looking back, the key lesson wasn't about the power of AI, but the power of proper diagnosis.

Because we started with a consulting-first approach, we solved the *right* problem. We didn't just throw technology at a wall; we built a surgical tool for a specific pain point.

Now, CT Consulting operates with a digital safety net, so people can focus on what only they can do.`
};