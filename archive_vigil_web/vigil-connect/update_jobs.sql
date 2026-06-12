-- Clear existing jobs to ensure clean state
truncate table public.job_applications cascade;
truncate table public.jobs cascade;

-- Insert the two specific roles requested
insert into public.jobs (title, department, location, type, description, responsibilities, requirements) values
(
  'Software Engineer',
  'Engineering',
  'Remote',
  'Full-time',
  'We are seeking a talented Software Engineer to join our dynamic team. You will be instrumental in developing robust software solutions that drive our business forward. In this role, you will work on the full software development lifecycle, from conception to deployment.',
  ARRAY[
    'Develop, test, and maintain high-quality software applications',
    'Collaborate with cross-functional teams to define and design new features',
    'Troubleshoot and debug applications to ensure optimal performance',
    'Participate in code reviews and contribute to engineering best practices',
    'Write clean, scalable, and efficient code'
  ],
  ARRAY[
    'Bachelor’s degree in Computer Science or related field',
    'Proficiency in JavaScript/TypeScript and React',
    'Experience with backend technologies like Node.js or Python',
    'Solid understanding of database management systems (SQL/NoSQL)',
    'Strong problem-solving and communication skills'
  ]
),
(
  'Hardware Engineer',
  'Engineering',
  'On-site',
  'Full-time',
  'We are looking for a skilled Hardware Engineer to design and develop cutting-edge hardware components. You will work closely with our product and software teams to integrate hardware and software solutions seamlessly.',
  ARRAY[
    'Design and develop hardware schematics and PCB layouts',
    'Perform hardware testing and validation',
    'Collaborate with manufacturing teams to ensure product quality',
    ' troubleshoot hardware issues and provide technical support',
    'Stay updated with the latest hardware technologies and trends'
  ],
  ARRAY[
    'Bachelor’s degree in Electrical Engineering or related field',
    'Experience with PCB design software (e.g., Altium, Eagle)',
    'Knowledge of analog and digital circuit design',
    'Hands-on experience with soldering and hardware testing equipment',
    'Ability to work independently and as part of a team'
  ]
);
