enum Status {
  DRAFT = 'draft',
  DELETED = 'deleted',
  PUBLISHED = 'published',
}

interface IRequest {
  topicId: number;
  status?: Status;
}

interface IFaqs {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: Status;
}

async function getFaqs(req: IRequest): Promise<IFaqs[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });

  const data: IFaqs[] = await res.json();
  return data;
}

const tempReq: IRequest = {
  topicId: 5,
};

getFaqs(tempReq);
